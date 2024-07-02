import type { SharedProps } from "@adonisjs/inertia/types";
import { Link, usePage } from "@inertiajs/react";
import { Button } from "../../components/ui/button";

function Nav() {
  // @ts-expect-error currentUser is not defined in SharedProps
  const page = usePage<SharedProps>().props;
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between space-x-6">
          <Link href="/">
            <div className="h-10 w-10 bg-black"></div>
          </Link>
          <div className="space-x-2">
            {page.currentUser ? (
              <>
                <Link href="/dashboard">
                  {/* @ts-ignore */}
                  <span>{page.currentUser.email}</span>
                </Link>
                <Link
                  href="/logout"
                  method="delete"
                  as="button"
                  className="text-bandicoot-800 hover:underline"
                >
                  <button className="rounded-[7px] bg-[#00ef81] px-7 py-2 text-[15px] font-bold uppercase italic">
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-bandicoot-800 hover:underline"
                >
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register" className="hover:underline">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
