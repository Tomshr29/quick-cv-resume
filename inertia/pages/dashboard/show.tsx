import type { InferPageProps } from "@adonisjs/inertia/types";
import AddresuemsController from "#controllers/posts_controller";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { useState } from "react";
import CVInfoContext from "~/context/CVContext";

function EditResume(props: InferPageProps<AddresuemsController, "show">) {
  const { post } = props;
  const [cvInfo, setCvInfo] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    // @ts-ignore
    <CVInfoContext.Provider value={{ cvInfo, setCvInfo }}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        <FormSection post={post} />
        <ResumePreview post={post} />
      </div>
    </CVInfoContext.Provider>
  );
}

export default EditResume;
