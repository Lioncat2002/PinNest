export default function ImageColumn(props: any) {
  //console.log(props.images);
  let key = 0;
  return (
    <div className="grid gap-4 start-0">
      {props.images.map((src: any) => {
        key += 1;
        return <img key={key} className="h-50 w-50 rounded-lg" src={src.url} />;
      })}
    </div>
  );
}
