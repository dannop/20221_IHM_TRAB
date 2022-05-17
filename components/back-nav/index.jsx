import Link from 'next/link';

export default function BackNav(props) {
  const { href } = props;

  return (
    <Link href={href}>
      <a>
        <p>&larr;Voltar</p>
      </a>
    </Link>
  );
}