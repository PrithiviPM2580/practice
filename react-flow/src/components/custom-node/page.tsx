import { useCallback, useState } from "react";
import {
  Position,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import CustomNode from "../custom-node";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes: Node[] = [
  {
    id: "node-1",
    type: "custom",
    position: { x: 100, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "output",
    targetPosition: Position.Top,
    position: { x: 0, y: 200 },
    data: { label: "Node 2" },
  },
  {
    id: "node-3",
    type: "output",
    targetPosition: Position.Top,
    position: { x: 200, y: 200 },
    data: { label: "Node 3" },
  },
];

const initialEdges = [
  { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
  { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];

const nodeTypes = { custom: CustomNode };

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ height: "100svh", width: "100vw" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
}
