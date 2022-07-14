import useGlobalState from "../../globalstate";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FiArrowLeft, FiHome, FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Outlet, Link as LinkTo, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  {
    name: "Keluar",
    icon: FiArrowLeft,
    path: "/dashboard/keluar",
  },
];

export default function SimpleSidebar() {
  const {
    isOpen: isSidebarOpen,
    onOpen: onSidebarOpen,
    onClose: onSidebarClose,
  } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Helmet>
        <title>QWT - Keluar</title>
      </Helmet>
      <SidebarContent
        onClose={() => onSidebarClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isSidebarOpen}
        placement="left"
        onClose={onSidebarClose}
        returnFocusOnClose={false}
        onOverlayClick={onSidebarClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onSidebarClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        display={{ base: "flex", md: "none" }}
        onOpen={onSidebarOpen}
      />
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          as={LinkTo}
          to="/"
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          QWT
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Stack spacing={2}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path}>
            {link.name}
          </NavItem>
        ))}
      </Stack>
    </Box>
  );
};

const NavItem = ({ icon, path, children, ...rest }) => {
  const loc = useLocation();
  return (
    <Link
      as={LinkTo}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        color={loc.pathname === path ? "accent.50" : "black"}
        bg={loc.pathname === path ? "blackAlpha.100" : "transparent"}
        borderWidth={2}
        borderColor={loc.pathname === path ? "accent.50" : "transparent"}
        transition="all 0.3s"
        _hover={{
          transform: "translateX(2px)",
          bg: "blackAlpha.100",
          color: "accent.50",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
            transform={loc.pathname === path ? "rotate(25deg)" : "none"}
            _groupHover={{
              transform: "rotate(25deg)",
            }}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="accent.50"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      position="sticky"
      top={0}
      zIndex={1}
      {...rest}
    >
      <IconButton onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />

      <Text
        as={LinkTo}
        to="/"
        fontSize="2xl"
        ml="8"
        fontFamily="monospace"
        fontWeight="bold"
        color="white"
      >
        Quiz With Trivia
      </Text>
    </Flex>
  );
};
