import e from "cors";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Category, Job } from "../../types";
import CategorySelector from "../MaterialComp/CategorySelector";
import LinearProgressWithLabel from "../MaterialComp/LinearProgressLabeled";
import HelpingInfo from "./HelpingInfo";
import "./PostJobDetails.css";
import PostJobUpperPart from "./PostJobUpperPart";
type Props = {
  newJob?: Job;
  setNewJob: Function;
};
type Inputs = {
  newCategory: string;
};

export default function PostJobCategory({ newJob, setNewJob }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [categories, setCategories] = useState<Category[]>();
  const [category, setCategory] = useState<Category>();
  const [newCategoryStatus, setNewCategoryStatus] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data.newCategory);
    setNewJob({
      ...newJob,
      category: category,
    });
    navigate("/post-job/skills");
  };

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  });

  useEffect(() => {
    setNewCategoryStatus("");
  }, [watch("newCategory")]);

  function createNewCategory(categoryName: string) {
    fetch("http://localhost:4000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: categoryName }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setCategory(data);
          setNewCategoryStatus("New category created");
        } else {
          setNewCategoryStatus(data.error);
        }
      });
  }

  return (
    <div className="category">
      {/* <PostJobUpperPart location="category" /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="category-label" htmlFor="newCategory">
          <p>Create new category</p>
          <input type="text" {...register("newCategory")} name="newCategory" />
          {watch("newCategory")?.length > 0 &&
            newCategoryStatus !== "New category created" &&
            newCategoryStatus !== "Category already exists" && (
              <span
                className="add-new-category-btn"
                onClick={() => {
                  createNewCategory(watch("newCategory"));
                }}
              >
                Create Category
              </span>
            )}
          {newCategoryStatus ? <span>{newCategoryStatus}</span> : null}

          {watch("newCategory")?.length !== 0 ? null : (
            <>
              <p>or select one from the list below</p>
              <CategorySelector
                oldCategory={newJob?.category}
                setCategory={setCategory}
              />
            </>
          )}
        </label>
        <div>
          <div className="buttons">
            <button
              onClick={() => {
                navigate("/post-job/title");
              }}
            >
              Back
            </button>
            <button type="submit">
              Next: <span>Skills</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
