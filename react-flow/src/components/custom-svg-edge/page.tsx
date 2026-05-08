import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import CustomSineEdgeNode from "./custom-sine-edge-node";
import CustomStepEdgeNode from "./custom-step-edge-node";

const initialNodes: Node[] = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "Node A" } },
  { id: "b", position: { x: 200, y: 100 }, data: { label: "Node B" } },
  { id: "c", position: { x: 0, y: 200 }, data: { label: "Node C" } },
  { id: "d", position: { x: 200, y: 300 }, data: { label: "Node D" } },
];

const initialEdges: Edge[] = [
  { id: "a->b", type: "step", source: "a", target: "b" },
  { id: "c->d", type: "sine", source: "c", target: "d" },
];

const edgeTypes = {
  step: CustomStepEdgeNode,
  sine: CustomSineEdgeNode,
};

export default function CustomSvgEdge() {
  return (
    <div style={{ height: "100svh", width: "100vw" }}>
      <ReactFlow
        defaultNodes={initialNodes}
        defaultEdges={initialEdges}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
