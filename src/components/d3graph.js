import React from "react"

import * as d3 from "d3"
import * as d3legend from "d3-svg-legend"
import "./d3graph.css"

// TODO: should uwe StaticQuery to get this data
import graphData from "./data.js"

///////////////////////
// Support Fuctions
///////////////////////
function getFromLS(key) {
  let ls = {}
  if (window.localStorage) {
    try {
      ls = JSON.parse(window.localStorage.getItem("web-dev-2018-2019")) || {}
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key]
}

function saveToLS(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(
      "web-dev-2018-2019",
      JSON.stringify({
        [key]: value,
      })
    )
  }
}

function delaySaveToLS(svg) {
  setTimeout(function() {
    console.log("Save to local storage")
    let svgNodes = svg.selectAll(".node")._groups[0]
    let nodes = []
    for (let i = 0; i < svgNodes.length; i++) {
      let node = {}
      let svgNode = svgNodes[i]
      node.x = svgNode.__data__.x
      node.y = svgNode.__data__.y
      node.r = svgNode.__data__.r
      node.radius = svgNode.__data__.radius
      node.id = svgNode.__data__.id
      node.cat = svgNode.__data__.cat
      node.name = svgNode.__data__.name
      node.link = svgNode.__data__.link
      node.value = svgNode.__data__.value
      node.icon = svgNode.__data__.icon
      node.desc = svgNode.__data__.desc
      nodes.push(node)
    }
    //console.log(nodes)
    saveToLS("nodes", nodes)
  }, 3000)
}

///////////////////////
// D3Graph
///////////////////////
class D3Graph extends React.Component {

  //--------------------------------------------------------------
  // drawChart 
  // TODO: can this be reduced?
  //--------------------------------------------------------------
  drawChart(graphData) {
    // Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
    // And this Forced directed diagram https://bl.ocks.org/mbostock/4062045
    let svg = d3.select("svg")
    let width = document.body.clientWidth // get width in pixels
    let height = +svg.attr("height")
    let centerX = width * 0.5
    let centerY = height * 0.5
    let strength = 0.05
    let focusedNode

    // change center
    if (
      "matchMedia" in window &&
      window.matchMedia("(max-device-width: 767px)").matches
    ) {
      window.document.getElementById('svg-element').setAttribute("height", 700);
      height = +svg.attr("height")
      centerX = width * 0.5
      centerY = height * 0.5
    }
    
    let format = d3.format(",d")

    // NOTE: to change, look at https://bl.ocks.org/pstuffa/3393ff2711a53975040077b7453781a9
    let scaleColor = d3.scaleOrdinal(d3.schemeCategory10)

    // use pack to calculate radius of the circle
    let pack = d3
      .pack()
      .size([width, height])
      .padding(1.5)

    let forceCollide = d3.forceCollide(d => d.r + 1)

    // use the force
    let simulation = d3
      .forceSimulation()
      // .force('link', d3.forceLink().id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("collide", forceCollide)
      // .force('center', d3.forceCenter(centerX, centerY))
      .force("x", d3.forceX(centerX).strength(strength))
      .force("y", d3.forceY(centerY).strength(strength))

    // reduce number of circles on mobile screen due to slow computation
    if (
      "matchMedia" in window &&
      window.matchMedia("(max-device-width: 767px)").matches
    ) {
      graphData = graphData.filter(el => {
        return el.value >= 20
      })
    }

    let root = d3.hierarchy({ children: graphData }).sum(d => d.value)

    // we use pack() to automatically calculate radius conveniently only
    // and get only the leaves
    let nodes = pack(root)
      .leaves()
      .map(node => {
        //console.log('node:', node.x, (node.x - centerX) * 2);
        const data = node.data
        return {
          x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
          y: centerY + (node.y - centerY) * 3,
          r: 0, // for tweening
          radius: node.r, //original radius
          id: data.cat + "." + data.name.replace(/\s/g, "-"),
          cat: data.cat,
          name: data.name,
          link: data.link || "",
          value: data.value,
          icon: data.icon,
          desc: data.desc,
        }
      })
    let lsNodes = getFromLS("nodes")
    if (lsNodes && nodes.length === lsNodes.length) nodes = lsNodes
    simulation.nodes(nodes).on("tick", ticked)

    svg.style("background-color", "#eee")
    let node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .call(
        d3
          .drag()
          .on("start", d => {
            if (!d3.event.active) simulation.alphaTarget(0.2).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on("drag", d => {
            d.fx = d3.event.x
            d.fy = d3.event.y
          })
          .on("end", d => {
            console.log("DRAG DONE")
            delaySaveToLS(svg)
            if (!d3.event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
          })
      )

    node
      .append("circle")
      .attr("id", d => d.id)
      .attr("r", 0)
      .style("fill", d => scaleColor(d.cat))
      .transition()
      .duration(1000)
      .ease(d3.easeElasticOut)
      .tween("circleIn", d => {
        let i = d3.interpolateNumber(0, d.radius)
        return t => {
          d.r = i(t)
          simulation.force("collide", forceCollide)
        }
      })

    node
      .append("clipPath")
      .attr("id", d => `clip-${d.id}`)
      .append("use")
      .attr("xlink:href", d => `#${d.id}`)

    // display text as circle icon
    node
      .filter(d => !String(d.icon).includes("img/"))
      .append("text")
      .classed("node-icon", true)
      .attr("clip-path", d => `url(#clip-${d.id})`)
      .selectAll("tspan")
      .data(d => d.icon.split(";"))
      .enter()
      .append("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
      .text(name => name)

    // display image as circle icon
    node
      .filter(d => String(d.icon).includes("img/"))
      .append("image")
      .classed("node-icon", true)
      .attr("clip-path", d => `url(#clip-${d.id})`)
      .attr("xlink:href", d => d.icon)
      .attr("x", d => -d.radius * 0.7)
      .attr("y", d => -d.radius * 0.7)
      .attr("height", d => d.radius * 2 * 0.7)
      .attr("width", d => d.radius * 2 * 0.7)

    node
      .append("title")
      .text(d => d.cat + "::" + d.name + "\n" + format(d.value))

    let legendOrdinal = d3legend
      .legendColor()
      .scale(scaleColor)
      .shape("circle")

    // let legend = svg
    svg
      .append("g")
      .classed("legend-color", true)
      .attr("text-anchor", "start")
      .attr("transform", "translate(20,30)")
      .style("font-size", "12px")
      .call(legendOrdinal)

    let sizeScale = d3
      .scaleOrdinal()
      .domain(["less use", "more use"])
      .range([5, 10])

    let legendSize = d3legend
      .legendSize()
      .scale(sizeScale)
      .shape("circle")
      .shapePadding(10)
      .labelAlign("end")

    // let legend2 = svg
    svg
      .append("g")
      .classed("legend-size", true)
      .attr("text-anchor", "start")
      .attr("transform", "translate(150, 25)")
      .style("font-size", "12px")
      .call(legendSize)

    /*
        <foreignObject className="circle-overlay" x="10" y="10" width="100" height="150">
            <div className="circle-overlay__inner">
                <h2 className="circle-overlay__title">ReactJS</h2>
                <p className="circle-overlay__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, sunt, aspernatur. Autem repudiandae, laboriosam. Nulla quidem nihil aperiam dolorem repellendus pariatur, quaerat sed eligendi inventore ipsa natus fugiat soluta doloremque!</p>
            </div>
        </foreignObject>
        */
    let infoBox = node
      .append("foreignObject")
      .classed("circle-overlay hidden", true)
      .attr("x", -350 * 0.5 * 0.8)
      .attr("y", -350 * 0.5 * 0.8)
      .attr("height", 350 * 0.8)
      .attr("width", 350 * 0.8)
      .append("xhtml:div")
      .classed("circle-overlay__inner", true)

    infoBox
      .append("h2")
      .classed("circle-overlay__title", true)
      .text(d => d.name)

    infoBox
      .append("p")
      .classed("circle-overlay__body", true)
      .html(d => {
        let a = ""
        if (d.link) {
          a =
            '<a  href="' +
            d.link +
            '" target="_blank" rel="noopener noreferrer" aria-label="express">link</a>'
        }
        return d.desc + " " + a
      })

    node.on("click", currentNode => {
      d3.event.stopPropagation()
      console.log("currentNode", currentNode)
      let currentTarget = d3.event.currentTarget // the <g> el

      if (currentNode === focusedNode) {
        // no focusedNode or same focused node is clicked
        return
      }
      let lastNode = focusedNode
      focusedNode = currentNode

      simulation.alphaTarget(0.2).restart()
      // hide all circle-overlay
      d3.selectAll(".circle-overlay").classed("hidden", true)
      d3.selectAll(".node-icon").classed("node-icon--faded", false)

      // don't fix last node to center anymore
      if (lastNode) {
        lastNode.fx = null
        lastNode.fy = null
        node
          .filter((d, i) => i === lastNode.index)
          .transition()
          .duration(1000)
          .ease(d3.easePolyOut)
          .tween("circleOut", () => {
            let irl = d3.interpolateNumber(lastNode.r, lastNode.radius)
            return t => {
              lastNode.r = irl(t)
            }
          })
          .on("interrupt", () => {
            lastNode.r = lastNode.radius
          })
      }

      // if (!d3.event.active) simulation.alphaTarget(0.5).restart();

      d3.transition()
        .duration(1000)
        .ease(d3.easePolyOut)
        .tween("moveIn", () => {
          console.log("tweenMoveIn", currentNode)
          let ix = d3.interpolateNumber(currentNode.x, centerX)
          let iy = d3.interpolateNumber(currentNode.y, centerY)
          let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5)
          return function(t) {
            // console.log('i', ix(t), iy(t));
            currentNode.fx = ix(t)
            currentNode.fy = iy(t)
            currentNode.r = ir(t)
            simulation.force("collide", forceCollide)
          }
        })
        .on("end", () => {
          simulation.alphaTarget(0)
          let $currentGroup = d3.select(currentTarget)
          $currentGroup.select(".circle-overlay").classed("hidden", false)
          $currentGroup.select(".node-icon").classed("node-icon--faded", true)
        })
        .on("interrupt", () => {
          console.log("move interrupt", currentNode)
          currentNode.fx = null
          currentNode.fy = null
          simulation.alphaTarget(0)
        })
    })

    // blur
    d3.select(document).on("click", () => {
      let target = d3.event.target
      // check if click on document but not on the circle overlay
      if (!target.closest("#circle-overlay") && focusedNode) {
        focusedNode.fx = null
        focusedNode.fy = null
        simulation.alphaTarget(0.2).restart()
        d3.transition()
          .duration(2000)
          .ease(d3.easePolyOut)
          .tween("moveOut", function() {
            console.log("tweenMoveOut", focusedNode)
            let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius)
            return function(t) {
              focusedNode.r = ir(t)
              simulation.force("collide", forceCollide)
            }
          })
          .on("end", () => {
            focusedNode = null
            simulation.alphaTarget(0)
          })
          .on("interrupt", () => {
            simulation.alphaTarget(0)
          })

        // hide all circle-overlay
        d3.selectAll(".circle-overlay").classed("hidden", true)
        d3.selectAll(".node-icon").classed("node-icon--faded", false)
      }
    })
    function ticked() {
      node
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .select("circle")
        .attr("r", d => d.r)
    }
  }

  //--------------------------------------------------------------
  // componentDidMount 
  //--------------------------------------------------------------
  componentDidMount() {
    //console.log(JSON.stringify(graphData))
    this.drawChart(graphData)
  }

  //--------------------------------------------------------------
  // render 
  //--------------------------------------------------------------
  render() {
    return (
      <>
        <div className="canvas">
          <h1 className="h1">State of Web Development 2018/2019</h1>
          <p className="subtitle">
            based on <a
              href="https://2018.stateofjs.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="express"
            >
              State of Javascript 2018
            </a> and
            <a
              href="https://2019.stateofcss.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="express"
            > State of CSS 2019
            </a>
          </p>
          <p className="subtitle">
            ORIGINAL <a
              href="https://alpiepho.github.io/state-web-development-2018-2019-withD3-static"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="express"
            >
              site
            </a>
          </p>
          <svg
            id="svg-element"
            width="100%"
            height="1000"
            fontFamily="sans-serif"
            fontSize="10"
            textAnchor="middle"
          ></svg>
          <p className="footer">
            Disclaimer: The technologies shown above are a partial set of
            technologies that are discussed on the State of JavaScript and State
            of CSS sites. Also, the weighted values are my own estimates from
            that data.
          </p>

          <p className="footer">
            The source for this site can be found on
            <a
              href="https://github.com/alpiepho/state-web-development-2018-2019-withD3-static"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="express"
            >
              Github
            </a>
            .
          </p>
        </div>
      </>
    )
  }
}

export default D3Graph
