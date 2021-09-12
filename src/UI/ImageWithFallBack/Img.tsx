import React, { ImgHTMLAttributes, useState } from 'react'
import DefaultImage from '../../assets/Images/404.png';
// interface Props extends ImgHTMLAttributes<any> {
//   fallback: string
// }

// export default function ImageWithFallback({ fallback, src, ...props }: Props) {
//   const [imgSrc, setImgSrc] = useState<string | undefined>(src)
//   const onError = () => setImgSrc(DefaultImage);

//   return <img src={imgSrc ? imgSrc : fallback} onError={onError} {...props} />
// }



 export default function ImageWithFallback (props: any) {
      const [imgSrc, setImgSrc] = useState<string | undefined>(props.src);
       
       const onError = () => setImgSrc(DefaultImage);
       
       return <img src={imgSrc && imgSrc } onError={onError}  />
 }