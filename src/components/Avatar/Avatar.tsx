type Props = { src?: string };

export const Avatar = ({ src = '' }: Props) => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <img
        src={src ? src : `https://docs.material-tailwind.com/img/face-2.jpg`}
        alt="avatar"
        className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
      />
    </div>
  );
};
