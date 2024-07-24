interface Props {
  thumbnail: string;
  name: string;
}
export default function Project({ thumbnail, name }: Props) {
  return (
    <>
      <div className={`m-4 h-24 rounded-md relative `}>
        <h3 className="absolute  text-linen z-10 top-1/3 left-0 right-0 mx-auto font-bold text-lg text-center">
          {name}
        </h3>
        <img
          src={thumbnail}
          alt=""
          className="overflow-hidden h-24 w-full dark:saturate-50 brightness-50 object-cover rounded-md object-center"
        />
      </div>
    </>
  );
}
