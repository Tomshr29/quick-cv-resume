import { LayoutGrid } from "lucide-react";
import PersonalDetail from "./forms/PersonalDetail";
function FormSection({ post }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <button className="flex gap-2 rounded-lg bg-gray-200 px-4 py-3">
          <LayoutGrid />
          Button
        </button>
      </div>
      <PersonalDetail post={post} />
    </div>
  );
}

export default FormSection;
