import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MainNavigationProps {
  onMobileMenuClick?: () => void;
}

const MainNavigation = ({ onMobileMenuClick }: MainNavigationProps) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
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
          <a href="/" className="font-bold text-2xl text-primary">
            HCSK
          </a>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {allLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger>
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="grid w-[400px] gap-3 p-4"
                        >
                          {link.items.map((item) => (
                            <motion.li
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.1 }}
                            >
                              <NavigationMenuLink asChild>
                                <a
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {item.title}
                                </a>
                              </NavigationMenuLink>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
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
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <div className="flex flex-col gap-4 mt-8">
                <AnimatePresence>
                  {allLinks.map((link) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.items ? (
                        <Collapsible
                          open={openSections.includes(link.title)}
                          onOpenChange={() => toggleSection(link.title)}
                        >
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full justify-between"
                            >
                              <span className="text-lg font-medium">
                                {link.title}
                              </span>
                              <motion.span
                                initial={false}
                                animate={{
                                  rotate: openSections.includes(link.title)
                                    ? 180
                                    : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="h-5 w-5" />
                              </motion.span>
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-2 mt-2">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {link.items.map((item) => (
                                <motion.a
                                  key={item.href}
                                  href={item.href}
                                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                                  onClick={() => setIsOpen(false)}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2 }}
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
                          className="block text-lg font-medium hover:text-primary py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
