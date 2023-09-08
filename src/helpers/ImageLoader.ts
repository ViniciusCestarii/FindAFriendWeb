interface ImageLoaderProps {
  src: string
}

export const imageLoader = ({ src }: ImageLoaderProps) => {
  return `${src.replace('/?', '/1000x690/?')}`
}
