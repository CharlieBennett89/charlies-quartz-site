import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  html: string
}

export default ((opts: Options) => {
  const RawHTML = ({}: QuartzComponentProps) => {
    return <div dangerouslySetInnerHTML={{ __html: opts.html }} />
  }

  return RawHTML
}) satisfies QuartzComponentConstructor<Options>