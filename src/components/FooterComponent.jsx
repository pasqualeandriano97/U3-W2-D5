const FooterComponent = () => {
  return (
    <div className="bg-dark text-white d-flex flex-column justify-content-center align-items-center border-top border-1 border-white py-3">
      <span> &copy; 2023-Copyright {new Date().getFullYear()}</span>
      <p className=" text-white-50 mt-3">
        Direttore lavori:{" "}
        <a
          className="text-decoration-none text-white"
          href="https://github.com/pasqualeandriano97"
        >
          Andriano Pasquale
        </a>
      </p>
      <p className=" text-white-50">
        Progetto realizzato da:{" "}
        <a
          className="text-decoration-none text-white"
          href="https://github.com/pasqualeandriano97"
        >
          Andriano Pasquale
        </a>
      </p>
    </div>
  );
};
export default FooterComponent;
