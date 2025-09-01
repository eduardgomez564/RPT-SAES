# TODO: Refactor Texts and Buttons Components

## Texts Components
- [ ] Update PrimaryHeader.tsx: Change to h1 with text-2xl font-bold text-[#013300]
- [ ] Update SecondaryHeader.tsx: Change to h2 with text-xl font-semibold text-[#013300]
- [ ] Update BodyText.tsx: Change to p with text-md font-normal text-black
- [ ] Update BodyLabel.tsx: Keep h3 with text-sm font-medium text-gray-700
- [ ] Update TertiaryHeader.tsx: Change to h2 with text-xl font-semibold text-[#013300] (merge style with SecondaryHeader)

## Buttons Components
- [ ] Update PrimaryButton.tsx: Add fullWidth prop (if fullWidth, add w-full class)
- [ ] Update SecondaryButton.tsx: Standardize sizes (small: px-3 py-1.5 text-sm, normal: px-6 py-3)
- [ ] Update DangerButton.tsx: Standardize sizes (small: px-3 py-1.5 text-sm, normal: px-6 py-3)
- [ ] Update UtilityButton.tsx: Standardize sizes (small: px-3 py-1.5 text-sm, normal: px-5 py-2)
- [ ] Update app/MasterTeacher/profile/page.tsx: Change BigButton to PrimaryButton with fullWidth=true
- [ ] Remove components/Common/Buttons/BigButton.tsx

## Followup
- [ ] Test components for consistency across the app
- [ ] Update any remaining inconsistencies if found
