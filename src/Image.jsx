import PropTypes from "prop-types";

function Image({ alt, caption }) {
  return (
    <figure className="relative">
      <img className="w-56 mx-auto my-4" src="https://i.pinimg.com/736x/b7/6a/28/b76a28e93ab718b476178c3ca70f7702.jpg" alt={alt} />
      <figcaption className="text-xs text-gray-500 mt-2">{caption}</figcaption>
      <p className="absolute top-28 left-[47%] bg-black bg-opacity-50 text-white p-2">{alt}</p>
    </figure>
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Image;
