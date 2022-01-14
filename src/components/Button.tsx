export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="font-extrabold text-6xl rounded-xl py-4 px-8 bg-yellow shadow-lg"
      {...props}
    />
  );
}
