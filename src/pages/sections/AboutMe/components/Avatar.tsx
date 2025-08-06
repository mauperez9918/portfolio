import avatar from "../../../../assets/img/avatar.webp";

const Avatar = () => {
  return (
    /* Img Container */
    <div className="sm:mx-auto md:max-w-[300px] lg:max-w-[500px] xl:w-[30%] lg:w-1/3 xs:w-[65%] rounded-lg shadow-lg border-[1px] border-primary/30">
      <img
        className="w-full h-auto object-contain rounded-lg"
        src={avatar}
        alt="Mauricio Perez Avatar"
      />
    </div>
  );
};

export default Avatar;
