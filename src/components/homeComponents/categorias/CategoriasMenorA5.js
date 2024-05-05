import React from "react";

function CategoriasMenorA5({ categories }) {
  console.log("mmmm", categories);
  if (categories?.length <= 1 || categories?.length > 5) {
    return null;
  }

  return (
    <div>
      <div className="py-4" style={{ backgroundColor: "#040915" }}>
        <div className="mx-5">
          <div class="row gap-3 ">
            {categories?.map((category) => (
              <div
                class="col bg-info  text-white d-flex justify-content-center align-items-center "
                style={{ borderRadius: "2rem", maxHeight: "350px" }}
              >
                <div className="  ">
                  <div class="">
                    <h5 class="mb-2">Enjoy With Earphone</h5>
                    {/* <p class="">With</p>
             <p class="">Earphone</p> */}
                    <button class="btn btn-primary">Browse</button>
                  </div>
                </div>
                {/* <div
           className="position-absolute top-50 translate-middle  "
           style={{ right: "-100px" }}
         > */}
                <div className=" ">
                  <img
                    src="/images/notFound.png"
                    style={{ maxWidth: "200px" }}
                  ></img>
                  {/* <h3 className="text-center">Category 1</h3> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriasMenorA5;
