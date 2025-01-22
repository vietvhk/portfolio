import { Column, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Column as="section" horizontal="center">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-strong-xs">
        Không tìm thấy trang
      </Heading>
      <Text onBackground="neutral-weak">Trang bạn đang tìm kiếm không tồn tại.</Text>
    </Column>
  );
}
