import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./clientDashboard.css";
import { User } from "../types";
import JobComponent from "./JobComponent/JobComponent";

type Props = {
  user: User;
};
function ClientDashboard({ user }: Props) {
  const [toShowList, setToShowList] = useState(false);
  const handleClick = () => {
    setToShowList(!toShowList);
    console.log("haha");
  };

  const navigate = useNavigate();

  return (
    <main className="client-main-dashboard">
      <section className="client-dashboard-header">
        <div className="left-side">
          <h1>Your Dashboard</h1>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
        </div>
        <div className="right-side">
          <button
            className="post-a-job__btn"
            onClick={() => navigate("/post-job/getting-started")}
          >
            Post a Job
          </button>
        </div>
      </section>
      <section className="client-dashboard-posting">
        <div className="posting-header">
          <h1>Your Postings</h1>
          <h5>See all posting</h5>
        </div>
        <div className="posting-main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 130"
            aria-hidden="true"
            role="img"
          >
            <circle
              cx="72.5"
              cy="65"
              r="64.5"
              fill="var(--illustration-color-1, #d5e0d5)"
            ></circle>
            <path
              d="M8.7 74.3c4.5 31.2 31.4 55.2 63.8 55.2 32.5 0 59.3-24 63.8-55.2H8.7z"
              fill="var(--illustration-color-4, #beccbe)"
            ></path>
            <path
              d="M116 103.6H48.2c-.3 0-.6-.1-.7-.3L26 79.6c-.6-.6-.1-1.7.7-1.7h67.7c.3 0 .6.1.7.3l21.5 23.6c.7.8.2 1.8-.6 1.8z"
              fill="var(--white, #ffffff)"
            ></path>
            <path
              d="M45.8 84.3l-.2-49.7c0-.6.4-1 1-1H82l3.8-6.7c.2-.3.5-.5.9-.5h22.6c.4 0 .7.2.9.5l3.4 6.6h3c.6 0 1 .5 1 1l-.1 50.9-71.7-1.1z"
              fill="var(--illustration-color-5, #171719)"
            ></path>
            <path
              d="M22 56.2h67c.3 0 .5.1.7.3l27.7 29-71.1-1.2c-.3 0-.5-.1-.7-.3L21.3 57.9c-.6-.7-.1-1.7.7-1.7zm39.9 38.7c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h2.2c.2 0 .4.2.4.4s-.2.4-.4.4h-2.2z"
              fill="var(--illustration-color-2, #beccbe)"
            ></path>
            <path
              d="M63.3 94.9s.3-.1.3-.4c0-.2-.1-.3-.3-.4l-5.2-2.4v5.5l5.2-2.3z"
              fill="var(--illustration-color-2, #beccbe)"
            ></path>
            <rect
              x="41.4"
              y="80.4"
              transform="rotate(90 44.116 94.49)"
              width="5.5"
              height="28.1"
              fill="var(--illustration-color-1, #d5e0d5)"
            ></rect>
            <path
              d="M27.2 95.1v-1.3c0-1.2.9-2.1 2.1-2.1h.8v5.5h-.8c-1.2 0-2.1-.9-2.1-2.1z"
              fill="var(--illustration-color-2, #beccbe)"
            ></path>
          </svg>
          {user.jobs?.length === 0 ? (
            <>
              <h3>No active job posts</h3>
              <p>Post a job to the marketplace and let talent come to you.</p>
            </>
          ) : (
            user?.jobs?.map((job) => {
              return <JobComponent job={job} />;
            })
          )}
          <button className="post-a-job__btn">Post a Job</button>
        </div>
      </section>
      <section className="work-with-talent">
        <div className="work-with-talent__header">
          {toShowList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 14 14"
              role="img"
              className="arrow-icon"
              style={{ width: "20px" }}
              onClick={handleClick}
            >
              <polygon
                fillRule="evenodd"
                points="7 3 0 10.433 1.476 12 7 6.134 12.524 12 14 10.433"
              ></polygon>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 14 14"
              role="img"
              className="arrow-icon"
              style={{ width: "20px" }}
              onClick={handleClick}
            >
              <polygon
                fillRule="evenodd"
                points="7 12 14 4.567 12.524 3 7 8.866 1.476 3 0 4.567"
              ></polygon>
            </svg>
          )}

          <h1>How to work with talent</h1>
          <p>
            Connect with a talent community that numbers in the millions, fast
            and at no cost.
          </p>
        </div>
        {toShowList ? (
          <ul className="work-with-talent__list">
            <li className="work-with-talent__list-item">
              <div className="icon-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 145 130"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M124.271 128.788c0 .815-.668 1.479-1.48 1.479H20.909a1.483 1.483 0 01-1.479-1.479V1.749c0-.815.666-1.48 1.479-1.48H122.79c.813 0 1.479.665 1.479 1.48v127.039h.002z"
                    fill="var(--illustration-color-1, #d5e0d5)"
                  ></path>
                  <rect
                    x="36.479"
                    y="101.504"
                    width="44.849"
                    height="13.584"
                    fill="var(--illustration-color-2, #171719)"
                  ></rect>
                  <path
                    d="M40.733 15.617v7.578c0 1.162-.316 2.057-.951 2.681-.632.624-1.506.942-2.625.942-1.214 0-2.175-.342-2.888-1.028-.712-.685-1.065-1.67-1.065-2.957h2.651c0 1.033.392 1.554 1.175 1.554.68 0 1.02-.4 1.02-1.192v-7.578h2.683zm10.279.557a5.306 5.306 0 012.014 2.024c.495.865.738 1.837.738 2.928 0 1.083-.245 2.066-.747 2.929a5.317 5.317 0 01-2.022 2.031 5.624 5.624 0 01-2.83.731 5.657 5.657 0 01-2.832-.731 5.349 5.349 0 01-2.021-2.031c-.497-.863-.747-1.846-.747-2.929 0-1.091.25-2.063.747-2.928a5.38 5.38 0 012.021-2.024c.852-.484 1.799-.726 2.832-.726 1.043.001 1.995.242 2.847.726zm-4.943 2.621c-.514.568-.772 1.347-.772 2.333 0 .966.258 1.745.772 2.32.523.572 1.22.861 2.096.861.869 0 1.564-.289 2.085-.861.523-.575.786-1.354.786-2.32 0-.977-.261-1.749-.775-2.324-.521-.575-1.216-.863-2.096-.863-.876 0-1.573.286-2.096.854zm17.836 3.178c.392.491.589 1.057.589 1.708 0 .951-.318 1.691-.951 2.225-.632.536-1.539.798-2.724.798h-5.16V15.617h5.037c1.13 0 2.001.247 2.621.74.616.495.923 1.19.923 2.1 0 .671-.176 1.227-.531 1.67a2.46 2.46 0 01-1.395.872c.668.157 1.2.477 1.591.974zm-5.558-1.822H60.1c.932 0 1.395-.398 1.395-1.188 0-.796-.474-1.192-1.427-1.192h-1.721v2.38zm3.402 3.156c0-.4-.133-.71-.392-.938-.26-.222-.633-.333-1.112-.333h-1.898v2.494h1.913c.99-.001 1.489-.409 1.489-1.223zm10.744-.493v3.891h-2.681V15.617h4.343c1.315 0 2.319.327 3.01.981.688.652 1.033 1.536 1.033 2.643 0 .69-.155 1.304-.461 1.844s-.767.962-1.37 1.272c-.609.308-1.346.458-2.212.458l-1.662-.001zm2.978-3.573c0-.973-.539-1.455-1.615-1.455h-1.362v2.883h1.362c1.076 0 1.615-.478 1.615-1.428zm12.554-3.067a5.336 5.336 0 012.015 2.024c.491.865.737 1.837.737 2.928 0 1.083-.246 2.066-.746 2.929a5.269 5.269 0 01-2.022 2.031c-.85.484-1.794.731-2.827.731s-1.98-.248-2.832-.731a5.328 5.328 0 01-2.021-2.031c-.499-.863-.744-1.846-.744-2.929 0-1.091.245-2.063.744-2.928a5.387 5.387 0 012.021-2.024c.852-.484 1.799-.726 2.832-.726 1.047.001 1.99.242 2.843.726zm-4.939 2.621c-.518.568-.777 1.347-.777 2.333 0 .966.262 1.745.777 2.32.521.572 1.213.861 2.096.861.865 0 1.563-.289 2.084-.861.521-.575.784-1.354.784-2.32 0-.977-.258-1.749-.776-2.324-.517-.575-1.213-.863-2.092-.863-.883 0-1.577.286-2.096.854zm17.112 6.406c-.296.495-.737.885-1.321 1.175-.576.295-1.279.443-2.105.443-1.244 0-2.271-.306-3.074-.912-.809-.604-1.246-1.455-1.315-2.539h2.851c.047.417.19.745.449.99.256.241.58.357.98.357.345 0 .617-.092.813-.282.195-.187.299-.437.299-.751a.965.965 0 00-.274-.706 2.172 2.172 0 00-.681-.465 14.379 14.379 0 00-1.129-.43 13.905 13.905 0 01-1.715-.695 3.254 3.254 0 01-1.149-1.005c-.32-.443-.476-1.024-.476-1.734 0-.661.166-1.229.502-1.713.33-.478.795-.848 1.388-1.099.587-.258 1.266-.385 2.032-.385 1.23 0 2.209.291 2.939.878.729.585 1.134 1.388 1.227 2.414H97.54c-.05-.368-.187-.658-.397-.874-.218-.211-.507-.32-.867-.32-.314 0-.568.088-.767.254-.19.164-.289.411-.289.736 0 .262.087.482.259.665.178.184.389.332.654.448.26.118.633.265 1.13.441.707.239 1.288.476 1.738.712.449.237.837.579 1.162 1.028.323.45.483 1.033.483 1.756a3.094 3.094 0 01-.448 1.613zm10.297-9.584v2.134h-3.013v8.954h-2.696v-8.954h-2.979v-2.134h8.688zm-72.742 33.57a2.279 2.279 0 01-2.279 2.276 2.27 2.27 0 01-2.27-2.276 2.273 2.273 0 012.27-2.272 2.28 2.28 0 012.279 2.272m60.778 1.514H45.006a1.516 1.516 0 110-3.032h53.525a1.517 1.517 0 110 3.032zM37.753 65.333a2.279 2.279 0 01-2.279 2.276 2.27 2.27 0 01-2.27-2.276 2.273 2.273 0 012.27-2.272 2.28 2.28 0 012.279 2.272m60.778 1.517H45.006a1.518 1.518 0 010-3.034h53.525c.839 0 1.519.68 1.519 1.517s-.68 1.517-1.519 1.517zM37.753 80.24a2.28 2.28 0 01-2.279 2.275 2.273 2.273 0 010-4.546 2.28 2.28 0 012.279 2.271m60.778 1.518H45.006a1.518 1.518 0 010-3.036h53.525a1.519 1.519 0 110 3.036z"
                    fill="var(--illustration-color-13, #171719)"
                  ></path>
                </svg>
              </div>
              <div className="describe-section">
                <h2>1. Post a job to the marketplace</h2>
                <p>
                  Provide enough detail for great talent to figure out if the
                  work is right for them. (You can always edit your post, or
                  send an invite to reach out to people directly.)
                </p>
              </div>
            </li>
            <li className="work-with-talent__list-item">
              <div className="icon-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 145 130"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M125.657 123.228H57.062a1.55 1.55 0 01-1.553-1.555V8.328c0-.857.694-1.556 1.553-1.556h86.383c.857 0 1.556.698 1.556 1.556v95.436"
                    fill="var(--illustration-color-2, #171719)"
                  ></path>
                  <path
                    d="M108.203 30.291H72.431a1.612 1.612 0 010-3.222h35.772a1.611 1.611 0 010 3.222zm20.481 22.017H72.603a1.61 1.61 0 110-3.221h56.081a1.61 1.61 0 110 3.221zm-9.783 39.794H72.603a1.612 1.612 0 010-3.223h46.299a1.611 1.611 0 11-.001 3.223zm9.783-26.532H72.603a1.61 1.61 0 110-3.221h56.081a1.61 1.61 0 110 3.221zm0 13.268H72.603a1.611 1.611 0 010-3.221h56.081a1.61 1.61 0 110 3.221z"
                    fill="var(--illustration-color-5, #e8f1e8)"
                  ></path>
                  <polygon
                    points="125.657,123.228 125.657,103.764 145,103.764"
                    fill="var(--illustration-color-5, #e8f1e8)"
                  ></polygon>
                  <path
                    d="M55.515 96.132v-38.19a3.597 3.597 0 013.598-3.596h12.751c4.575 0 8.661-2.723 9.095-7.278.5-5.227-3.597-8.688-8.72-8.688H53.424a8.747 8.747 0 00-5.891 2.271L34.754 51.467l-.217.199a8.71 8.71 0 01-6.059 2.438H2.628v42.027h52.887z"
                    fill="var(--illustration-color-13, #e8f1e8)"
                  ></path>
                  <path
                    d="M.809 98.674H29.34a1.62 1.62 0 001.623-1.616V53.236c0-.896-.728-1.621-1.623-1.621H.809a.809.809 0 00-.809.811v45.439c0 .444.36.809.809.809"
                    fill="var(--illustration-color-1, #171719)"
                  ></path>
                  <path
                    d="M24.839 60.703a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0"
                    fill="var(--white, #ffffff)"
                  ></path>
                </svg>
              </div>
              <div className="describe-section">
                <h2>2. Get proposals from talent</h2>
                <p>
                  A strong working relationship starts with open communication.
                  Here's your chance to ask about experience, set expectations
                  for what you need, and discuss terms of the work.
                </p>
              </div>
            </li>
            <li className="work-with-talent__list-item">
              <div className="icon-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 145 130"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M1.9 12.1l81.7.1c.7 0 1.3.6 1.3 1.4l-.1 51.9c0 .7-.6 1.3-1.4 1.3l-50.7-.1v13.7c0 1.2-1.4 1.8-2.2 1L14.2 66.7H1.8c-.7 0-1.3-.6-1.3-1.3l.1-51.9c0-.8.6-1.5 1.3-1.4"
                    fill="var(--illustration-color-1, #d5e0d5)"
                  ></path>
                  <path
                    d="M64.1 33.9l-51.4-.1c-.6 0-1-.4-1-1s.4-1 1-1l51.4.1c.6 0 1 .4 1 1s-.5 1-1 1zM49.9 44.8l-37.2-.1c-.6 0-1-.4-1-1s.4-1 1-1l37.2.1c.6 0 1 .4 1 1s-.4 1-1 1z"
                    fill="var(--illustration-color-12, #171719)"
                  ></path>
                  <path
                    d="M143.5 48.2H61c-.5 0-1 .4-1 1v52.7c0 .5.4 1 1 1h51.1v13.8c0 1.1 1.4 1.7 2.2 1l16.4-14.7h12.8c.5 0 1-.4 1-1V49.2c0-.6-.4-1-1-1z"
                    fill="var(--illustration-color-2, #171719)"
                  ></path>
                  <circle
                    cx="85.7"
                    cy="75.5"
                    r="3.4"
                    fill="var(--white, #ffffff)"
                  ></circle>
                  <circle
                    cx="102.2"
                    cy="75.5"
                    r="3.4"
                    fill="var(--white, #ffffff)"
                  ></circle>
                  <circle
                    cx="118.8"
                    cy="75.5"
                    r="3.4"
                    fill="var(--white, #ffffff)"
                  ></circle>
                </svg>
              </div>
              <div className="describe-section">
                <h2>3. Start working together</h2>
                <p>
                  Once you both agree on terms, collaborate with simple and
                  secure tools like chat, file sharing, and time tracking.
                </p>
              </div>
            </li>
            <li className="work-with-talent__list-item">
              <div className="icon-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 145 130"
                  aria-hidden="true"
                  role="img"
                >
                  <rect width="145" height="130" fill="none"></rect>
                  <path
                    d="M94.09 114.859l-6.32 3.701a13.593 13.593 0 01-6.869 1.859H40.69a7.9 7.9 0 01-7.69-6.49 7.37 7.37 0 012-6.06.62.62 0 00-.49-1c-4.38 0-6.479-3.89-6.479-7.21a7.304 7.304 0 011.28-4.15.79.79 0 00-.48-1.23c-2.655-.588-4.771-2.592-5.502-5.211s.038-5.428 2.002-7.309a.821.821 0 00-.27-1.34 7.36 7.36 0 01-4.7-7.189 7.64 7.64 0 017.77-7.101h30.22c-1.06-7.12-2.18-20.79-1.17-23.94 1.22-3.77 4-6.91 8.09-6.91 4.54 0 7.07 3.68 7.07 8.22v.29s2 31.29 21.7 37.81h10.44v33.721l-10.391-.461z"
                    fill="var(--illustration-color-14, #171719)"
                  ></path>
                  <path
                    d="M89.35 73.359c0-.55.45-1 1-1H144c.55 0 1 .45 1 1v49.5c0 .55-.45 1-1 1H90.35c-.55 0-1-.45-1-1v-49.5z"
                    fill="var(--illustration-color-4, #171719)"
                  ></path>
                  <path
                    d="M3.82 54.07v3.15H.67a.67.67 0 000 1.34h3.15v3.15a.67.67 0 001.34 0v-3.15h3.15a.67.67 0 000-1.34H5.16v-3.15a.671.671 0 00-1.34 0z"
                    fill="var(--illustration-color-10, #debe1a)"
                  ></path>
                  <circle
                    cx="22.28"
                    cy="34.57"
                    r="2.67"
                    fill="var(--illustration-color-9, #171719)"
                  ></circle>
                  <circle
                    cx="100.74"
                    cy="23.98"
                    r="17.84"
                    fill="var(--illustration-color-2, #171719)"
                  ></circle>
                  <path
                    d="M98.51 31.36a1.642 1.642 0 01-1.17-.48L91.44 25a1.652 1.652 0 010-2.34 1.67 1.67 0 012.341 0l4.729 4.74 10.42-10.3a1.654 1.654 0 112.32 2.36L99.67 30.89c-.311.301-.727.47-1.16.47z"
                    fill="var(--white, #ffffff)"
                  ></path>
                  <path
                    d="M87 72.359h15.391v51.5H87a1 1 0 01-1-1V73.35a1 1 0 011-.991z"
                    fill="var(--illustration-color-1, #d5e0d5)"
                  ></path>
                  <circle
                    cx="94.28"
                    cy="81.34"
                    r="2.67"
                    fill="var(--illustration-color-4, #171719)"
                  ></circle>
                </svg>
              </div>
              <div className="describe-section">
                <h2>4. Pay for work you approve</h2>
                <p>
                  Reports are useful for keeping track of payments and reviewing
                  work. As you complete jobs, you can build trusting
                  relationships with talent in a way that helps you both grow.
                </p>
              </div>
            </li>
          </ul>
        ) : null}
      </section>
    </main>
  );
}
export default ClientDashboard;
