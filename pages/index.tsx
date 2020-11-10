import Link from 'next/link'

const IndexPage = (props: any) => (
  <div title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <pre>{JSON.stringify(props, undefined, "  ")}</pre>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
)

export default IndexPage
