import md5 from "md5";


export const createHash = () =>{
    const hash = md5(
        import.meta.env.VITE_TS +
          import.meta.env.VITE_PRIVATE_KEY +
          import.meta.env.VITE_API_KEY
      );
    return hash
}