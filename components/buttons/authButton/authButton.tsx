import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

export default function AuthButton() {
  const user = useUser();
  return (
    <div className="space-x-4 h-full">
      {!user.isSignedIn && (
        <SignInButton>
          <button className="hover:border-b-2 hover:border-gray-700 border-b-2 border-transparent px-3 py-2 text-sm font-medium h-full flex items-center text-black">
            Sign in
          </button>
        </SignInButton>
      )}
      {!!user.isSignedIn && (
        <SignOutButton>
          <button className="hover:border-b-2 hover:border-gray-700 border-b-2 border-transparent px-3 py-2 text-sm font-medium h-full flex items-center text-black">
            Sign out
          </button>
        </SignOutButton>
      )}
    </div>
  );
}
