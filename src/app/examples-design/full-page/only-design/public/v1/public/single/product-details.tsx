/*
|-----------------------------------------
| setting up ProductDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
const ProductDetails = () => {
  return (
    <main className="mb-12 mt-4 px-4">
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Nutrient Value & Benefits</h2>
        <p className="text-slate-500">
          Adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu
          nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus
          adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,
          consectetur elit.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-semibold">Storage Tips</h2>
        <p className="text-slate-500">
          Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit.
          Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis
          sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-semibold">Unit</h2>
        <p className="text-slate-500">3 units</p>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-semibold">Disclaimer</h2>
        <p className="text-slate-500">
          Image shown is a representation and may slightly vary from the actual product. Every effort is made to
          maintain accuracy of all information displayed.
        </p>
      </div>
    </main>
  );
};
export default ProductDetails;
