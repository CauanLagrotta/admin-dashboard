import {
  BarChart2,
  DollarSign,
  LucideProps,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { ForwardRefExoticComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/UseIsMobile";

interface SidebarItem {
  name: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  color: string;
  href: string;
}

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8b5cf6",
    href: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#ec4899",
    href: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10b981",
    href: "/sales",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#f59e0b",
    href: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3b82f6",
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6ee7b7",
    href: "/settings",
  },
] as SidebarItem[];

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const sidebarWidth = isMobile
    ? isSidebarOpen
      ? "w-screen"
      : "w-20"
    : isSidebarOpen
    ? "w-64"
    : "w-20";

  return (
    <motion.div
      className={`relative z-20 transition-all duration-300 ease-in-out flex-shrink-0 ${sidebarWidth} overflow-hidden`}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
