import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../components/ui/menubar";

import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuBar() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger><RxHamburgerMenu /></MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Home</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Publik API 1</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Publik API 2</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Publik API 3</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Contact Me</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
