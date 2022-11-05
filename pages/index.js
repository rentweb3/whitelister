import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Whitelist from "./Whitelist";
import About from "./About";
import { useEffect, useRef, useState } from "react";
import Image from "./Images";
import { useAccount } from "wagmi";
import { connectWallet, getProviderOrSigner } from "../SmartContractsStuff/accountsConnect";
import Web3Modal from "web3modal";
import { WebsiteRentABI, WebsiteRentAddress } from "../SmartContractsStuff/contract";
import { BigNumber, Contract, ethers, providers, utils } from "ethers";

let myUrlAddress = "https://nifter.vercel.app";

export default function Home() {
  const [currentpage, setCurrentPage] = useState("home");
  const { isConnected, isDisconnected, address } = useAccount();
  console.log("is connected ", isConnected)
  const [currentDeployment, setCurrentDeployment] = useState(undefined);
  const web3ModalRef = useRef();
  async function fetchDeployment() {
    if (web3ModalRef.current === undefined) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
    }

    const signer = await getProviderOrSigner(web3ModalRef, true);
    // Get the address associated to the signer which is connected to  MetaMask
    const _address = await signer.getAddress();
    const websiteRentContract = new Contract(
      WebsiteRentAddress,
      WebsiteRentABI,
      signer
    );
    console.log("connected address is ", _address)

    let _currentDeployment = await websiteRentContract.websiteToDeployment(myUrlAddress);
    console.log('deployment', _currentDeployment);
    setCurrentDeployment(_currentDeployment);


  }

  function noDeployment(adr) {
    
    if (!adr ||  adr?.toString().includes("0x0000") || adr?.toString().includes("0X0000"))
      return true;

    return false
  }
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    // Assign the Web3Modal class to the reference object by setting it's `current` value
    // The `current` value is persisted throughout as long as this page is open
    fetchDeployment();

  }, [isConnected]);
  return (
    <>
      <Navbar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7ZZQwTn5ClB5v8hOJTehixgGs5csluH-8WIUQEB2rdEaFFzXWOoXY4oOGK09US2CAdY&usqp=CAU"
        companyname="NFTsales"
        func={setCurrentPage}
      />
      {
        noDeployment(currentDeployment) == true ? <div style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
          fontSize: "20px",
          fontWeight: "700",

        }}>
          Nifter.vercel.app is not rented for any sale yet
        </div>

          : <>  {currentpage === "about" && (
            <About
              heading="About us"
              description="The founder is an integral part of the brand’s origin story, so making her the star of the page works. Think about including additional elements that can strengthen your About Us page.Hello know us."
              discord="https://discord.com/invite/chainlink"
              linkdin="https://www.linkedin.com/in/umarkhatab456"
              email="mailto:seemalfrl@gmail.com"
              twitter="https://twitter.com/umarkhatab465"
            />
          )}
            {currentpage === "whitelist" && (
              <Whitelist
                heading="Get Whitelisted Now"
                text="You will receive a special NFT as part of your membership, and you will be eligible for Early Access. NFTS are limited, and only NFT owners will get Early Access. You can help us create more tools by purchasing a membership. Join our community! Public access will be enabled in the end of 2022."
              />
            )}
            {currentpage === "home" && (
              <div>
                <Introduction
                  intro="When buying an NFT, you will be instantly registered as the unique owner on the Blockchain. Exclusive NFT Collections. Buy NFT Art simply with a Credit Card. No digital wallet needed."
                  heading="Collection NFT Sale"
                  image="https://madnfts.io/wp-content/uploads/2022/04/WD-03.png"
                />
                <Image />
              </div>
            )}

          </>
      }

    </>
  );
}
