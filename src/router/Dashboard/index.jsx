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
import { Outlet, Link as LinkTo } from "react-router-dom";

const LinkItems = [{ name: "Dashboard", icon: FiHome, path: "/dashboard" }];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
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
        <Text as={LinkTo} to="/" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
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
        <NavItem icon={FiArrowLeft} path={"/"}>
          Keluar
        </NavItem>
      </Stack>
    </Box>
  );
};

const NavItem = ({ icon, path, children, ...rest }) => {
  const loc = useLocation();
  return (
    <Link
      href="#"
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
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text as={LinkTo} to="/" fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        QWT
      </Text>
    </Flex>
  );
};
