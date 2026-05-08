import { BaseEdge, type Edge, type EdgeProps } from "@xyflow/react";

type CustomStepEdgeNodeProps = Edge<{ label: string }, "step">;

export default function CustomStepEdgeNode({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps<CustomStepEdgeNodeProps>) {
  const centerY = (targetY - sourceY) / 2 + sourceY;

  const edgePath = `M${sourceX},${sourceY} L${sourceX},${centerY} L${targetX},${centerY} L${targetX},${targetY}`;
  return <BaseEdge id={id} path={edgePath} />;
}
