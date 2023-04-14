import React from "react"
import { Box, Drawer, Typography } from "@mui/material"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import CloseIcon from '@mui/icons-material/Close'
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import SelectUnstyled, {
      SelectUnstyledProps,
      selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { productService } from '@/services/product.service'
import { useRouter } from "next/router"

interface Props {
      isOpen: boolean
      setIsOpen: Function
      menuType: string
}

export default function SideMenu({ isOpen, setIsOpen, menuType }: Props) {

      return (
            <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
                  <Box width='270px' textAlign='right' role='presentation'>
                        <Typography variant="h6" component='div' className="relative">
                              <CloseIcon className='absolute left-2 top-3 !text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
                              <ul className='flex flex-col main-text'>
                                    {DynamicList(menuType, setIsOpen)}
                              </ul>
                        </Typography>
                  </Box>
            </Drawer>
      )
}

function DynamicList(type: string, setIsOpen: Function): ReactJSXElement {
      if (type === 'main') {
            return (
                  <>
                        <li className='menu-list mt-14'>כניסה</li>
                        <li className='menu-list'>חדש באתר</li>
                        <li className='menu-list'>בגדי ים</li>
                        <li className='menu-list'>קולקציות</li>
                        <li className='menu-list'>בגדי חוף</li>
                        <li className='menu-list'>אקססוריז</li>
                        <li className='menu-list uppercase'>Gift card</li>
                        <li className='menu-list border-b border-gray-300'>
                              <div className='flex gap-4 justify-end'>
                                    <SiTiktok className='footer-icon' />
                                    <FaFacebookF className='footer-icon' />
                                    <BsInstagram className='footer-icon' />
                              </div>
                        </li>
                  </>
            )
      } else {
            const collections = productService.getCollections().map(item => item.category)
            const { category } = useRouter().query
            const router = useRouter()

            const navigate = (cat: string | string[] | undefined) => {
                  router.push(`/products/${cat}`)
                  setIsOpen(false)
            }
            return (
                  <>
                        <CustomSelect defaultValue={category} className="mt-14 border uppercase py-4 hover:bg-[#e9ecef]">
                              {collections.map((collection , idx) => (
                                    <StyledOption key={collection + idx} className="uppercase" value={collection} onClick={() => navigate(collection)}>
                                          {collection}
                                    </StyledOption>
                              ))}
                        </CustomSelect >
                  </>
            )
      }
}

const blue = {
      100: '#DAECFF',
      200: '#99CCF3',
      400: '#3399FF',
      500: '#007FFF',
      600: '#0072E5',
      900: '#003A75',
};

const grey = {
      50: '#f6f8fa',
      100: '#eaeef2',
      200: '#d0d7de',
      300: '#afb8c1',
      400: '#8c959f',
      500: '#6e7781',
      600: '#57606a',
      700: '#424a53',
      800: '#32383f',
      900: '#24292f',
};

const StyledButton = styled('button')(() => `
  &.${selectUnstyledClasses.expanded} {
      &::after {
            font-size: 40px;
            content: '▴';
            position: absolute;
            top: 50%;
            right: 0;
            height: 20px;
      }
}
&::after {
      font-size: 40px;
      content: '▾';
      position: absolute;
      top: 50%;
      right: 0;
      height: 20px;
  }
  `,
)

const StyledListbox = styled('ul')(
      ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  width: 270px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

const StyledOption = styled(OptionUnstyled)(
      ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<
      TValue extends {},
      Multiple extends boolean,
>(
      props: SelectUnstyledProps<TValue, Multiple>,
      ref: React.ForwardedRef<HTMLButtonElement>,
) {
      const slots: SelectUnstyledProps<TValue, Multiple>['slots'] = {
            root: StyledButton,
            listbox: StyledListbox,
            popper: StyledPopper,
            ...props.slots,
      };

      return <SelectUnstyled {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
      props: SelectUnstyledProps<TValue, Multiple> &
            React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;
