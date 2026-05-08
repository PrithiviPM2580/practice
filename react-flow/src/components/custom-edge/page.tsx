import {
  Background,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type OnConnect,
  type Edge,
  type Node,
  addEdge,
} from "@xyflow/react";
import CustomEdgeNode from "../custom-edge";
import { useCallback } from "react";

const initialNodes: Node[] = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "Node A" } },
  { id: "b", position: { x: 0, y: 100 }, data: { label: "Node B" } },
];

const initialEdges: Edge[] = [
  { id: "a->b", type: "custom", source: "a", target: "b" },
];

const edgeTypes = {
  custom: CustomEdgeNode,
};

export default function CustomEdge() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback((connection) => {
    const edge = { ...connection, type: "custom" };
    setEdges((edg) => addEdge(edge, edg));
  }, []);

  return (
    <div style={{ height: "100svh", width: "100vw" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
