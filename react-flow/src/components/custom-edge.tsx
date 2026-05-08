import {
  BaseEdge,
  getStraightPath,
  type Edge,
  type EdgeProps,
} from "@xyflow/react";

type CustomEdge = Edge<{ value: number }, "custom">;

export default function CustomEdgeNode({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps<CustomEdge>) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  return <BaseEdge path={edgePath} id={id} />;
}
