import { FunctionComponent } from 'react';
import Link from 'next/link';

export const TopMenu: FunctionComponent = () => (
    <nav>
        <Link href="/">
            <a>
              Home
            </a>
        </Link>
    </nav>);