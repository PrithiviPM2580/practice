import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

export default function CustomNode() {
  return (
    <div className="bg-red-400 p-4 rounded">
      <div>Custom Node</div>
      <Handle type="target" position={Position.Top} />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
      />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}
