import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { Eye, EyeOff } from "lucide-react";
import { FC, useState } from "react";


interface IDialog {
    error: string;
    open: boolean;
    handleOpen: () => void;
    handleDelete: () => void;
    setPassword: (text: string) => void;
}


export const Dialogs: FC<IDialog> = ({ 
    error,
    open,
    handleOpen,
    handleDelete,
    setPassword,
}) => {

	const [isHidden, setIsHidden] = useState<boolean>(true);

    return (
        <>
        <Dialog
              open={open}
              handler={handleOpen}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Удалить</DialogHeader>
              <DialogBody>
                <div className="text-center text-lg mt-2 mb-4 ">
                    <h2>Вы уверены что хотите удалить продукт</h2>
                </div>
                <div className="md:flex mt-5">
                        
						<div className='relative h-10 w-full min-w-[100px] md:ml-3 max-md:mt-5'>
								<input
									// value={}
									onChange={(e) => setPassword(e.target.value)}
									type={isHidden ? 'password' : 'text'}
									className='peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-lg font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-lime-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50'
									placeholder=' '
										/>

								<div
									tabIndex={0}
									onClick={() => setIsHidden(!isHidden)}
									onKeyDown={e => {
										console.log(e);
										e.code == 'Space' && setIsHidden(!isHidden);
									}}
									className='cursor-pointer absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-gray-500'>
									{isHidden ? <Eye size={20} /> : <EyeOff size={20} />}
										</div>
								
								<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-lime-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-lime-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-lime-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
									{"Пароль"}
								</label>
						</div>
					</div>
					
                { error && (		
					<div className='bg-red-500 flex justify-center items-center  text-white  text-md py-1 px-3 rounded-md mt-5 mb-5'>
						<p className='' > {error} </p>	
					</div>	

					) }
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Отмена</span>
                </Button>
                {/* <Link href='/register/login' className='flex justify-between items-center gap-1'> */}
                <Button variant="gradient" color="green" onClick={handleDelete}>
                  <span>Подвердить</span>
                </Button>
                {/* </Link> */}
              </DialogFooter>
            </Dialog>        
        </>
    );
};