const Button = ({ children }) => {
  return (
    <button className="w-full bg-primary-10/80 py-2 text-zinc-50 rounded-md drop-shadow-md transition-all hover:bg-primary-10 uppercase text-center">
      {children}
    </button>
  );
};

export default Button;
