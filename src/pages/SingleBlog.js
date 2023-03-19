import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

import blog1 from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <article className="single-blog-card">
                <Link
                  to="/blogs"
                  className="back-link d-flex align-items-center gap-10"
                >
                  <HiOutlineArrowLeft className="icon fs-4" />
                  Return to Blog List
                </Link>
                <h2 className="single-blog-title">
                  A Beautiful Sunday Morning Renaissance
                </h2>
                <img src={blog1} className="img-fluid" alt="Blog post" />
                <p className="single-blog-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
