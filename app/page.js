import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['John', 'Jane', 'Joe'];

  return (
    <>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </>
  );
}
