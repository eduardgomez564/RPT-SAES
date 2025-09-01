<<<<<<< HEAD
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
=======
# MasterTeacher Students Table Fixes - Completed Tasks

## Completed Steps:
- [x] Create StudentDetailModal component to display all student information
- [x] Update StudentTab.tsx to add state for detail modal and selected student
- [x] Add onClick handler to "See All" button to open modal with student details
- [x] Fix TableList.tsx table spacing by removing empty td causing big space on right side of actions
- [x] Move fullscreen button outside table header to maintain functionality

## Summary of Changes:
1. **StudentDetailModal.tsx**: New modal component displaying all student fields (ID, name, age, grade, section, address, guardian, contact, assessments)
2. **StudentTab.tsx**: Added modal state, selectedStudent state, and onClick for "See All" button
3. **TableList.tsx**: Removed empty td in tbody and last th in thead, repositioned fullscreen button above table

## Testing Notes:
- Table spacing should now be tighter with no big empty space on the right of actions
- "See All" button opens modal showing complete student details
- Fullscreen toggle button moved to top-right of table container
- Modal displays all student information in organized grid layout
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e
