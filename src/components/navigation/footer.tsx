// hooks

interface Props {}

export default function Footer({}: Props) {
  return (
    <footer className="flex w-full items-center justify-between border-4 border-red-500">
      I am footer, only show in mobile navigation
    </footer>
  );
}
