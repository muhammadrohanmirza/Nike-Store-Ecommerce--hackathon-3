// import { useUser } from "@clerk/nextjs"
// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"


// const AuthGuard = ({children}: {children: React.ReactNode})=>{
//     const [isloading , setIsloading] = useState(true)
// const {isSignedIn}= useUser()
// const router = useRouter()

// useEffect(()=>{
//     if (isSignedIn === false){
//         router.replace('Join')
//     }else{
//         setIsloading(false)
//     }
// },[isSignedIn, router])

// if (isloading) return <p className="text-3xl">Loading....</p>

// return<>{children}</>
// }

// export default AuthGuard