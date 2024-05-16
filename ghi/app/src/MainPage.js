import logo from "./logo.png";

function MainPage() {
  return (
    <div class="bg-success p-2 text-dark bg-opacity-25">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Miao's Autodearship</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership management!
            <img src={logo} alt="logo" width="600" height="500" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
