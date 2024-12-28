import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, ChevronDown, GraduationCap, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "./ui/logo";

interface MainNavigationProps {
  onMobileMenuClick?: () => void;
}

const MainNavigation = ({ onMobileMenuClick }: MainNavigationProps) => {
  const { theme, setTheme, themeButtonRef } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  const handleThemeToggle = (e: React.MouseEvent) => {
    setTheme(theme === "dark" ? "light" : "dark", e);
  };

  const aboutLinks = [
    { title: "About Us", href: "/about" },
    { title: "Our Vision", href: "/vision" },
    { title: "Objectives", href: "/objectives" },
  ];

  const schoolInfoLinks = [
    { title: "School Fees", href: "/fees" },
    { title: "Curriculum", href: "/curriculum" },
    { title: "School Uniform", href: "/uniform" },
    { title: "School Timing", href: "/timing" },
    { title: "About Leaves", href: "/leaves" },
  ];

  const facilitiesLinks = [
    { title: "Library", href: "/library" },
    { title: "Computer Lab", href: "/computer-lab" },
    { title: "Science Lab", href: "/science-lab" },
  ];

  const academicsLinks = [
    { title: "Examination & Promotions", href: "/examinations" },
    { title: "Admission Procedures", href: "/admission" },
    { title: "To Parent", href: "/parent-info" },
    { title: "Co-Curricular", href: "/co-curricular" },
    { title: "Conduct For Student", href: "/student-conduct" },
  ];

  const allLinks = [
    { title: "Home", href: "/" },
    { title: "About", items: aboutLinks },
    { title: "Message", href: "/message" },
    { title: "School Info", items: schoolInfoLinks },
    { title: "Facilities", items: facilitiesLinks },
    { title: "Academics", items: academicsLinks },
    { title: "Achievements", href: "/achievements" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full h-20 bg-background border-b border-border fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </a>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {allLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger className="text-base">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] bg-popover">
                          {link.items.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <span className="text-base">
                                    {item.title}
                                  </span>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        {link.title}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            ref={themeButtonRef}
            variant="ghost"
            size="icon"
            className="h-10 w-10 relative"
            onClick={handleThemeToggle}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme === "dark" ? "dark" : "light"}
                initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
                transition={{
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>

          <Button
            variant="default"
            className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all duration-200 ease-in-out text-primary-foreground"
            onClick={() => (window.location.href = "/admission")}
          >
            <GraduationCap className="h-4 w-4" />
            Apply Now
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                {isOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] overflow-y-auto px-2 bg-background"
            >
              <div className="flex flex-col gap-2 mt-8">
                <AnimatePresence>
                  {allLinks.map((link) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-2"
                    >
                      {link.items ? (
                        <Collapsible
                          open={openSections.includes(link.title)}
                          onOpenChange={() => toggleSection(link.title)}
                        >
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full justify-between transition-all duration-200 ease-in-out p-2 h-auto"
                            >
                              <span className="text-base">{link.title}</span>
                              <motion.span
                                initial={false}
                                animate={{
                                  rotate: openSections.includes(link.title)
                                    ? 180
                                    : 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                              >
                                <ChevronDown className="h-5 w-5" />
                              </motion.span>
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-1">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              {link.items.map((item) => (
                                <motion.a
                                  key={item.href}
                                  href={item.href}
                                  className="block py-2 text-base text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out"
                                  onClick={() => setIsOpen(false)}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                  }}
                                >
                                  {item.title}
                                </motion.a>
                              ))}
                            </motion.div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <a
                          href={link.href}
                          className="block text-base hover:text-primary py-2 px-2 transition-all duration-200 ease-in-out text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                <Button
                  variant="default"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 transition-all duration-200 ease-in-out text-primary-foreground"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "/admission";
                  }}
                >
                  <GraduationCap className="h-4 w-4" />
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
