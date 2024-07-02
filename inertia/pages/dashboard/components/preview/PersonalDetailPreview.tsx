import { useContext } from "react";
import CVInfoContext from "~/context/CVContext";

function PersonalDetailPreview() {
  const { cvInfo } = useContext(CVInfoContext);

  const firstName = cvInfo?.firstName ?? "";
  const lastName = cvInfo?.lastName ?? "";

  return (
    <div>
      <h2 className="text-center text-xl font-bold">
        {firstName} {lastName}
      </h2>
    </div>
  );
}

export default PersonalDetailPreview;
