import { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import CVInfoContext from "~/context/CVContext";

function ResumePreview({ post }) {
  const { cvInfo } = useContext(CVInfoContext);

  return (
    <div className="h-full border-t-8 p-14 shadow-lg">
      <PersonalDetailPreview cvInfo={cvInfo} post={post} />
    </div>
  );
}

export default ResumePreview;
