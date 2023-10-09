const SectionTitle = ({ title, isColor = false, color }) => {
  return (
    <h4
      className={`py-3 rounded-md font-semibold uppercase drop-shadow-sm text-center text-lg sm:text-xl my-4 ${
        isColor && color
      }`}
    >
      {title}
    </h4>
  );
};

export default SectionTitle;
