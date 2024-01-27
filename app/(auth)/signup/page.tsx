import Image from "next/image";
import Link from "next/link";
import SignupCard from "./signup-Card";

export default async function Signup() {
	return (
<>
<h1 className='text-2xl font-bold text-center mb-4'>Sign up to SnapCode</h1>
<SignupCard/>
</>
		
	);
}