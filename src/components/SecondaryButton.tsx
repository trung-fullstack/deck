export default function SecondaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="font-extrabold text-lg rounded-xl py-3 px-6 border-yellow text-yellow border-[3px] shadow-lg"
      {...props}
    />
  );
}
