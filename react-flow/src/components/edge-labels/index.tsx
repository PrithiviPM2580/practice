import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type OnConnect,
} from "@xyflow/react";
import CustomEdge from "./custom-edge";
import { useCallback } from "react";

const initialNodes: Node[] = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "Node A" } },
  { id: "b", position: { x: 0, y: 100 }, data: { label: "Node B" } },
  { id: "c", position: { x: 0, y: 200 }, data: { label: "Node C" } },
];

const initialEdges: Edge[] = [
  { id: "a-b", type: "custom", source: "a", target: "b" },
  { id: "b-c", type: "custom", source: "b", target: "c" },
];

const edgeTypes = {
  custom: CustomEdge,
};

export default function EdgeLabels() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "custom" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );

  return (
    <div style={{ height: "100svh", width: "100vw" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        edgeTypes={edgeTypes}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
